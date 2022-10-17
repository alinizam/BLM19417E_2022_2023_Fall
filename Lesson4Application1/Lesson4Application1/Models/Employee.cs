using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Lesson4Application1.Models
{
    public partial class Employee
    {
        public int EmployeeId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public int? DepartmentId { get; set; }
    }
}
