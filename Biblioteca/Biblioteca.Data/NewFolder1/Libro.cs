using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Biblioteca.Data.NewFolder1
{
    public class Libro
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int AñoDePublicacion { get; set; }
        public Editorial Editorial { get; set; }
    }
}
