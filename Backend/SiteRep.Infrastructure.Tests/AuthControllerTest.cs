using FluentAssertions;
using Newtonsoft.Json;
using SiteRep.Infrastructure.Tests.Common;
using SiteRep.Infrastructure.Tests.Extensions;
using SitRep.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace SiteRep.Infrastructure.Tests
{
    public class AuthControllerTest
    {
        private readonly HttpClient _client;
        string _token;
        public AuthControllerTest()
        {
            TestingWebAppFactory<Program> factory = new TestingWebAppFactory<Program>();
            _client = factory.CreateClient();
        }

        [SetUp]
        public async Task Setup()
        {
            _token = await CreateToken();
            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _token);
        }
        [Test]
        public async Task LoginTest()
        {
            var response = await _client.GetAsync("/api/ticket");
            //Assert
            response.EnsureSuccessStatusCode();

            var responseString = await response.Content.ReadAsStringAsync();
            var actual = JsonConvert.DeserializeObject<List<Ticket>>(responseString);
            Assert.IsTrue(actual.Count > 0);
        }
        [Test]
        public async Task RegisterUser()
        {
            var postRequest = new HttpRequestMessage(HttpMethod.Post, "api/auth/register");
            var content = new StringContent(GetDataStructureFromJson("Resources.Register.newuser.json"), Encoding.UTF8, "application/json");
            postRequest.Content = content;
            // Act
            var response = await _client.SendAsync(postRequest);
            // Assert
            response.EnsureSuccessStatusCode();
            var responseString = await response.Content.ReadAsStringAsync();
            var user = JsonConvert.DeserializeObject<User>(responseString);
            var expected = JsonConvert.DeserializeObject<User>(GetDataStructureFromJson("Resources.Register.expected.json"));
            user.Should().BeEquivalentTo(expected);
        }

        public async Task<string> CreateToken()
        {
            var postRequest = new HttpRequestMessage(HttpMethod.Post, "api/auth/login");
            var content = new StringContent(GetDataStructureFromJson("Resources.Register.input.json"), Encoding.UTF8, "application/json");
            postRequest.Content = content;
            var response = await _client.SendAsync(postRequest);
            response.EnsureSuccessStatusCode();
            var responseString = await response.Content.ReadAsStringAsync();
            return responseString;
        }
        private string GetDataStructureFromJson(string resource)
        {
            var structure = Assembly.GetExecutingAssembly().GetEmbeddedResourceContent(resource);
            if (structure == null)
            {
                return String.Empty;
            }
            return structure;
        }
    }
}
