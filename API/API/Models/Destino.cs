using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    [Table("Destinos")]
    public class Destino
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]        
        public string Cidade { get; set; }

        [StringLength(800)]
        public string Detalhes { get; set;}

        [StringLength(50)]
        public string Estado { get; set;}

        [StringLength(255)]
        public string Img { get; set;}

        [StringLength(50)]
        public string Pais { get; set;}
    }
}
