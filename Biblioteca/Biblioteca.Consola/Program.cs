using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Biblioteca.Data;
using Biblioteca.Data.NewFolder1;

namespace Biblioteca.Consola
{
    class Program
    {
        static void Main(String[] args)
        {
            using (var context = new BibliotecaContext("BibliotecaMestro"))
            {
               var nuevoLibro = new Libro();
               nuevoLibro.Nombre = "Libro de Nacho";
               nuevoLibro.AñoDePublicacion = 2000;
               context.Libros.Add(nuevoLibro);
               context.SaveChanges();

                Console.WriteLine("Hola Mundo");
                Console.ReadKey();
            }
        }
    }
}
       





