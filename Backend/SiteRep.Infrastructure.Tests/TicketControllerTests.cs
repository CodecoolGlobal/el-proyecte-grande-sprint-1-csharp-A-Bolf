using Newtonsoft.Json;
using SiteRep.Infrastructure.Tests.Common;
using SitRep.Models;

namespace SiteRep.Infrastructure.Tests
{
    public class Tests
    {
        private readonly HttpClient _client;
        public Tests()
        {
            TestingWebAppFactory<Program> factory = new TestingWebAppFactory<Program>();
            _client = factory.CreateClient();
        }

        [Test]
        public async Task GetAllTicketTest()
        {
            var response = await _client.GetAsync("/api/ticket");
            //Assert
            response.EnsureSuccessStatusCode();

            var responseString = await response.Content.ReadAsStringAsync();
            var actual = JsonConvert.DeserializeObject<List<Ticket>>(responseString);
            Assert.IsTrue(actual.Count > 0);

        }
    }
}