using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Data.Entities;

namespace Data.Interfaces
{
    public interface IBookRepository
    {
        Task<Book> FindAsync(Guid id);
        Task DeleteAsync(Guid id);
        Task<Book> PutAsync(Book book);
        Task<Book> AddAsync(Book book);
        Task<IEnumerable<Book>> GetBooks();



    }
}
