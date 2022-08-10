using System.Text.Json.Serialization;

namespace SitRep.Models.Types;
[JsonConverter(typeof(JsonStringEnumConverter))]
public enum TicketType
{
    TASK,
    BUG,
    REQUEST,
    OTHER,
}