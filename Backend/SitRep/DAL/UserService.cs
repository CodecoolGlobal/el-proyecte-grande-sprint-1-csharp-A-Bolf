using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.IdentityModel.Tokens;
using SitRep.Models;

namespace SitRep.DAL;

public class UserService : IUserService
{
    private readonly SitRepContext _context;
    private readonly IConfiguration _configuration;

    public UserService(SitRepContext context,IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    public IEnumerable<User> GetAll()
    {
        return _context.Users.ToList();
    }

    public void Register(UserDTO userDto)
    {
        var user = userDto.FromDto();
        _context.Users.AddRange(user);
        _context.SaveChanges();
    }
    

    public bool VerifyPasswordHash(UserDTO userDto)
    {
        var user = GetUserByName(userDto.UserName);
        return BCrypt.Net.BCrypt.Verify(userDto.Password,user.PasswordHash);

    }

    public bool VerifyUserExists(UserDTO userDto)
    {
        var user = _context.Users.FirstOrDefault(user => user.UserName == userDto.UserName);
        return user != null;
    }
    

    public string CreateToken(UserDTO userDto)
    {
        var user = userDto.FromDto();
        List<Claim> claims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.UserName),
            new Claim(ClaimTypes.Role,"User")
        };

        var key = new SymmetricSecurityKey(
            System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        var token =new  JwtSecurityToken(
            claims: claims,
            expires: DateTime.Now.AddDays(1),
            signingCredentials: creds
        );

        var jwt = new JwtSecurityTokenHandler().WriteToken(token);
        
        return jwt;
    }

    public void Update(UserDTO userDto)
    {
        var user= userDto.FromDto();
        _context.Users.Update(user);
        _context.SaveChanges();
    }

    public void Delete(long id)
    {
        var user = GetById(id);
        _context.Users.Remove(user);
        _context.SaveChanges();
    }

    public User GetById(long id)
    {
        return _context.Users.FirstOrDefault(user => user.id == id);
    }


    public User GetUserByName(string username)
    {
        return _context.Users.FirstOrDefault(user => user.UserName == username);
    }
}