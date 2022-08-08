using System.Text.Json.Serialization;

namespace SitRep.Models.Types;
[JsonConverter(typeof(JsonStringEnumConverter))]
public enum StatusType
{
    OPEN,
    IN_PROGRESS,
    RESOLVED,
    CLOSED,
}