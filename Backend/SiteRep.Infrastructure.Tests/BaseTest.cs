using SiteRep.Infrastructure.Tests.Common;
using SiteRep.Infrastructure.Tests.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace SiteRep.Infrastructure.Tests
{
    public class BaseTest
    {
        protected readonly HttpClient Client;
        public BaseTest()
        {
            TestingWebAppFactory<Program> factory = new TestingWebAppFactory<Program>();
            Client = factory.CreateClient();
        }
        protected string GetDataStructureFromJson(string resource)
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
