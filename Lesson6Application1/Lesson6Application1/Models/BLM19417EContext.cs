using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace Lesson6Application1.Models
{
    public partial class BLM19417EContext : DbContext
    {
        public BLM19417EContext()
        {
        }

        public BLM19417EContext(DbContextOptions<BLM19417EContext> options)
            : base(options)
        {

        }
        public virtual DbSet<Product> Products { get; set; } = null!;
        public virtual DbSet<ProductType> ProductTypes { get; set; } = null!;
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.LogTo(message=>Debug.WriteLine(message));
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=BLM19417E;Integrated Security=True;Encrypt=False;Trusted_Connection=True;");
            }
        }
    }
}
