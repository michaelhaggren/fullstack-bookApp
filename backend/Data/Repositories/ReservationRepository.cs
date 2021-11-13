using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Data.Entities;
using Data.Interfaces;

namespace Data.Repositories
{
    public class ReservationRepository : IReservationRepository
    {
        private readonly BookContext _bookContext;

        public ReservationRepository(BookContext bookContext)

        {
            _bookContext = bookContext;
        }

        public async Task<Reservation> AddAsync(Reservation reservation)
        {
            reservation.Id = reservation.Id == Guid.Empty ? Guid.NewGuid() : reservation.Id;
            _bookContext.Add(reservation);
            await _bookContext.SaveChangesAsync();
            return reservation;
        }

        public async Task DeleteAsync(Guid id)
        {
            var reservation = await _bookContext.Reservations.FindAsync(id);
            if (reservation != null)
            {
                _bookContext.Reservations.Remove(reservation);
                await _bookContext.SaveChangesAsync();
            }
        }

        public async Task<Reservation> FindAsync(Guid id)
        {
            return await _bookContext.Reservations.FindAsync(id);
        }

        public IQueryable<Reservation> Get()
        {
            return _bookContext.Reservations.AsQueryable();
        }


        public async Task<Reservation> PutAsync(Reservation reservation)
        {
            var localRes = _bookContext.Reservations.Local.FirstOrDefault(t => t.Id == reservation.Id);
            if (localRes != null)
            {
                _bookContext.Entry(localRes).State = Microsoft.EntityFrameworkCore.EntityState.Detached;
            }
            _bookContext.Entry(reservation).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            await _bookContext.SaveChangesAsync();
            return reservation;
        }
    }
}
