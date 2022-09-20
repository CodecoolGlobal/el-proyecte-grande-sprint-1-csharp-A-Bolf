using FluentAssertions;
using Newtonsoft.Json;
using SiteRep.Infrastructure.Tests.Common;
using SitRep.Models;

namespace SiteRep.Infrastructure.Tests
{
    public class TicketControllerTests :BaseTest
    {
        [Test]
        public async Task Should_retrives_all_tickest()
        {
            var response = await Client.GetAsync("/api/ticket");
            //Assert
            response.EnsureSuccessStatusCode();

            var responseString = await response.Content.ReadAsStringAsync();
            var actual = JsonConvert.DeserializeObject<List<Ticket>>(responseString);
            var expected = JsonConvert.DeserializeObject<List<Ticket>>(GetDataStructureFromJson("Resources.Ticket.alltickets.json"));
            Assert.That(actual.Count, Is.EqualTo(expected.Count));

        }
    }
}