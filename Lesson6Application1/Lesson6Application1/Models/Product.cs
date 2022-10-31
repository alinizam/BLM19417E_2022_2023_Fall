using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Lesson6Application1.Models
{
    public partial class Product
    {
        [Key]
        public int ProductID{ get; set; }
        public string? Name { get; set; }
        public int Price { get; set; }
        public string ProductType { get; set; }

        public int DepartmentId { get; set; }
       
        [NotMapped]
        public int productCount { get; set; }

    }
}
