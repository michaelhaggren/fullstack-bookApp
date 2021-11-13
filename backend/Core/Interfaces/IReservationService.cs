using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Models;

namespace Core.Interfaces
{
    public interface IReservationService
    {
        Task<ReservationModel> GetReservationAsync(Guid id);
        Task<List<ReservationModel>> GetReservationsAsync();
        Task<ReservationModel> CreateReservationAsync(ReservationModel reservation);
        Task<ReservationModel> PutReservationAsync(ReservationModel reservation);
        Task DeleteReservationAsync(Guid id);
    }
}
