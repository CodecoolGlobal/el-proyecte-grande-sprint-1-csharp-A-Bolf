using System.Text.Json.Serialization;

namespace SitRep.Models.Types;
[JsonConverter(typeof(JsonStringEnumConverter))]
public enum StatusType
{
    OPEM,
    IN_PROGRESS,
    RESOLVED,
    CLOSED,
}