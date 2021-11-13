using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Data.Entities;

namespace Data.Interfaces
{
    public interface IReservationRepository
    {
        Task<Reservation> FindAsync(Guid id);
        Task DeleteAsync(Guid id);
        Task<Reservation> PutAsync(Reservation reservation);
        Task<Reservation> AddAsync(Reservation reservation);
        IQueryable<Reservation> Get();



    }
}
