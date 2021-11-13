using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Interfaces;
using Core.Models;
using Data.Entities;
using Data.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Core.Services
{
    public class ReservationService : IReservationService
    {
        private readonly IReservationRepository _reservationRepository;

        public ReservationService(IReservationRepository reservationRepository)
        {
            _reservationRepository = reservationRepository;
        }
        public async Task<ReservationModel> CreateReservationAsync(ReservationModel reservation)
        {
            if (reservation == null)
            {
                throw new ArgumentNullException(nameof(reservation));
            }
            var reservationEntity = new Reservation
            {
                Title = reservation.Title,
                Author = reservation.Author,
                Price = reservation.Price,
                DateReserved = reservation.DateReserved,
            };
            reservationEntity = await _reservationRepository.AddAsync(reservationEntity);
            return new ReservationModel
            {
                Id = reservationEntity.Id,
                Title = reservationEntity.Title,
                Author = reservationEntity.Author,
                Price = reservationEntity.Price,
                DateReserved = reservationEntity.DateReserved,
            };
        }

        public async Task DeleteReservationAsync(Guid id)
        {
            await _reservationRepository.DeleteAsync(id);
        }

        public async Task<ReservationModel> GetReservationAsync(Guid id)
        {
            var reservationEntity = await _reservationRepository.FindAsync(id);
            if (reservationEntity == null)
            {
                return null;
            }
            return new ReservationModel
            {
                Id = reservationEntity.Id,
                Title = reservationEntity.Title,
                Author = reservationEntity.Author,
                Price = reservationEntity.Price,
                DateReserved = reservationEntity.DateReserved,
            };
        }

        public async Task<List<ReservationModel>> GetReservationsAsync()
        {
            IQueryable<Reservation> query = _reservationRepository.Get();
            return await query.Select(reservation => new ReservationModel
            {
                Id = reservation.Id,
                Title = reservation.Title,
                Author = reservation.Author,
                Price = reservation.Price,
                DateReserved = reservation.DateReserved,
            }).ToListAsync();
        }

        public async Task<ReservationModel> PutReservationAsync(ReservationModel reservation)
        {
            var reservationEntity = new Reservation
            {
                Id = reservation.Id,
                Title = reservation.Title,
                Author = reservation.Author,
                Price = reservation.Price,
                DateReserved = reservation.DateReserved,
            };
            reservationEntity = await _reservationRepository.PutAsync(reservationEntity);
            return new ReservationModel
            {
                Id = reservationEntity.Id,
                Title = reservationEntity.Title,
                Author = reservation.Author,
                Price = reservationEntity.Price,
                DateReserved = reservationEntity.DateReserved,

            };
        }
    }
}
