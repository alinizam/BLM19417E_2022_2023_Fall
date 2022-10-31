using System.ComponentModel.DataAnnotations;

namespace Lesson6Application1.Models
{
    public class ProductType
    {
        [Key]
        public int TypeId{ get; set; }
        public string TypeName{ get; set; }
    }
}
