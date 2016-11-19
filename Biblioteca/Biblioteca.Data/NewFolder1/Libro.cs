using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Biblioteca.Data.NewFolder1
{
    public class Libro
    {

        public Libro()
        {
            this.Autores = new List<Autor>();
        }
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int AñoDePublicacion { get; set; }
        public Editorial Editorial { get; set; }

        public IList<Autor> Autores { get; set; }

        public void AgregarAutor (Autor nuevoAutor)
        {
            this.Autores.Add(nuevoAutor);
        }
    }
}
