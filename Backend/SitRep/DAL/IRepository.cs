using System.Collections.Generic;
using SitRep.Models;
using SitRep.Models.Types;

namespace SitRep.DAL;

public interface IRepository<T>
{
    public IEnumerable<T> GetAll();
    public T GetById(int id);
    public void Add(T item);
    public void Update(T item);
    public void Delete(int id);

    public void SetUpMockData();
}