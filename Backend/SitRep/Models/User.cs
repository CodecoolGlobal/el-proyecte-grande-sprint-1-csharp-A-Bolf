using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SitRep.Models;

public class User
{
    public long id { get; set; }
    public string UserName { get; set; }
    [Required]
    public string PasswordHash { get; set; }



}