using System.Text.Json.Serialization;

namespace SitRep.Models.Types;
[JsonConverter(typeof(JsonStringEnumConverter))]
public enum PriorityType
{
    LOW,
    MEDIUM,
    HIGH,
}