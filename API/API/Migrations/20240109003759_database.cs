using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class database : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Destinos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Cidade = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Detalhes = table.Column<string>(type: "varchar(800)", maxLength: 800, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Estado = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Img = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Pais = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Destinos", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Destinos",
                columns: new[] { "Id", "Cidade", "Detalhes", "Estado", "Img", "Pais" },
                values: new object[,]
                {
                    { 1, "Porto Seguro", "Porto Seguro é uma cidade no sul da Bahia com praias paradisíacas, centro histórico preservado e cultura indígena. Além de sua beleza natural, oferece passeios de escuna, trilhas ecológicas e animada vida noturna.", "Bahia", "https://resortnabahia.com.br/wp-content/uploads/2019/01/lateral-resort-mar.jpg", "Brasil" },
                    { 2, "Rio de Janeiro", "O Rio de Janeiro é uma cidade vibrante e encantadora, famosa por suas praias, Carnaval e Cristo Redentor. Com sua rica história e cultura, é um destino bastante popular que oferece muitas opções de lazer.", "Rio de Janeiro", "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/rio-de-janeiro-capa2019-01.jpg", "Brasil" },
                    { 3, "Salvador", "Salvador é uma cidade histórica da Bahia, conhecida por sua rica cultura afro-brasileira, culinária e festas populares. Com belas praias e monumentos históricos, é um destino popular para quem busca história e cultura.", "Bahia", "https://a.cdn-hotels.com/gdcs/production67/d1025/9c42e257-fce5-4600-97d1-c3f3c6afd86b.jpg", "Brasil" },
                    { 4, "João Pessoa", "João Pessoa é uma cidade acolhedora, com praias de águas cristalinas e paisagens encantadoras. O centro histórico é repleto de construções barrocas e os passeios de catamarã pelo rio Paraíba são imperdíveis.", "Paraíba", "https://s2.static.brasilescola.uol.com.br/be/2023/08/1-joao-pessoa.jpg", "Brasil" },
                    { 5, "Porto de Galinhas", "Porto de Galinhas é uma cidade no estado de Pernambuco, conhecida por suas praias de águas cristalinas e piscinas naturais formadas por corais. Com clima tropical, é um destino popular para quem busca diversão.", "Pernambuco", "https://thumbcdn-z.hotelurbano.net/6GQUgE4O8rtSqaQOWE2PWT7ZiUY=/444x270/center/middle/filters:quality(40)/https://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2023/07/26/12/44/iStock_1128300455.jpg", "Brasil" },
                    { 6, "Caldas Novas ", "Caldas Novas é uma cidade termal em Goiás, famosa pelas águas quentes e pelas piscinas naturais. Além dos banhos relaxantes, é possível aproveitar a culinária local, passeios de barco e visitar o Lago Corumbá.", "Goiás", "https://thumbcdn-z.hotelurbano.net/Wlq3zqRosR7oz5rQQeIpPr2j52A=/444x270/center/middle/filters:quality(40)/https://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2023/10/31/13/21/10_shutterstock_1315449212.jpg", "Brasil" },
                    { 7, "Natal", "Natal é uma cidade encantadora do Nordeste brasileiro, conhecida por suas praias paradisíacas, dunas de areia e falésias coloridas. Com clima agradável, é um destino popular para quem busca sol, mar e tranquilidade.", "Rio Grande do Norte", "https://thumbcdn-z.hotelurbano.net/DW3PZYnFMw9iVyekQJRTaTTF3C4=/444x270/center/middle/filters:quality(40)/https://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2023/11/08/15/09/Praia_de_Ponta_Negra.png", "Brasil" },
                    { 8, "Fortaleza", "Jericoacoara é um verdadeiro paraíso brasileiro, com praias de areia branca, dunas, lagoas cristalinas e noites estreladas. Um lugar para quem busca contato com a natureza, com atividades como caminhadas e passeios de buggy.", "Ceará", "https://thumbcdn-z.hotelurbano.net/D-t0oayNyr8YzFSmtsruGJXhVfs=/444x270/center/middle/filters:quality(40)/https://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2023/08/14/17/49/iStock_536474512.jpg", "Brasil" },
                    { 9, "Cabo Frio", "Cabo Frio é um destino popular na região dos Lagos no Brasil, famosa por suas belas praias de águas cristalinas e areias brancas. A cidade oferece várias opções de lazer, como esportes aquáticos, passeios de barco e mergulho.", "Rio de Janeiro", "https://thumbcdn-z.hotelurbano.net/H44iQZJarYpMvwMbDfOEboBZz_Q=/444x270/center/middle/filters:quality(40)/https://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2023/08/28/17/28/shutterstock_1265227072_Cabo_Frio.jpg", "Brasil" },
                    { 10, "Bauneário Camboriú", "Balneário Camboriú é uma cidade turística no litoral de Santa Catarina, conhecida por suas belas praias e vida noturna agitada. Com arranha-céus e modernas construções, a cidade oferece uma atmosfera sofisticada.", "Santa Catarina", "https://thumbcdn-z.hotelurbano.net/nqJY6vKWHlh6f5w1M0edad-fp-4=/444x270/center/middle/filters:quality(40)/https://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2023/10/27/22/52/Capturar.JPG", "Brasil" },
                    { 11, "Lisboa", "Lisboa é a capital de Portugal e uma das cidades mais charmosas da Europa. Com diversos pontos turísticos, como a Torre de Belém e o Mosteiro dos Jerónimos, é um destino popular para quem busca história e cultura.", "Lisboa", "https://media.istockphoto.com/id/1221460597/pt/foto/yellow-vintage-tram-on-the-street-in-lisbon-portugal.jpg?s=612x612&w=0&k=20&c=ZbKrrfXuPumtrc0nnU74D9aa9fed7ZuXM1CTrcV7Qq8=", "Portugal" },
                    { 12, "Orlando", "Orlando é uma cidade localizada na Flórida, nos Estados Unidos, conhecida por ser a capital mundial dos parques temáticos. Com atrações como Walt Disney World, é um destino popular para quem busca diversão em família.", "Flórida", "https://documentodeviagem.com/dicas-da-disney-e-orlando/disney-magic-kingdom-documento-de-viagem-1024x768_edited/", "Estado Unidos" },
                    { 13, "Cancún", "Cancún é uma cidade localizada na península de Yucatán, no México, conhecida por suas praias de água cristalina e areia branca. Com clima tropical e ambiente festivo, é um destino popular para quem busca diversão.", "Quintano Roo,", "https://www.remessaonline.com.br/blog/wp-content/uploads/2022/05/viagem-para-cancun-1170x780.jpg.optimal.jpg", "México" },
                    { 14, "Punta Cana", "Punta Cana é uma cidade localizada na República Dominicana, conhecida por suas praias de areia branca e águas cristalinas. Com clima tropical e ambiente relaxante, é um destino popular para quem busca tranquilidade.", "La Altagracia", "https://imgmd.net/images/v1/guia/1700155/punta-cana.jpg", "República Dominicana" },
                    { 15, "Santiago", "Santiago é a capital do Chile, uma cidade vibrante e moderna com uma rica herança cultural e histórica. Com diversas atrações turísticas, como a Plaza de Armas, é um destino popular para quem busca arte e história.", "Santiago", "https://f.i.uol.com.br/fotografia/2023/10/25/169826186065396b649cfd8_1698261860_3x2_rt.jpg", "Chile" },
                    { 16, "Paris", "Paris é uma cidade icônica na França, conhecida por sua arquitetura clássica, museus renomados e gastronomia sofisticada. Com uma atmosfera charmosa e romântica, é um destino popular para quem busca cultura e história.", "Île-de-France", "https://www.viajaquepassa.com.br/wp-content/uploads/2021/02/torre-eiffel-paris.png", "França" },
                    { 17, "Tóquio", "Tóquio é uma cidade vibrante e frenética, onde a tradição e a modernidade se misturam. É um paraíso para os amantes de tecnologia, moda, gastronomia e cultura pop, com uma infinidade de experiências para todos os gostos.", "Ilha de Honsu.", "https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo/toquio-pontos-turisticos.jpg", "Japão" },
                    { 18, "Cartagena", "Descubra as praias paradisíacas, a rica história, a gastronomia deliciosa e a cultura encantadora de Cartagena. Explore suas ruas movimentadas, mar azul cristalino e desfrute de festas e festivais animados, incluindo o famoso Carnaval. Uma mistura mágica de história e modernidade, este destino caribenho é o lugar perfeito para uma aventura inesquecível.", "Bolívar", "https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/54/b4/96.jpg", "Colômbia" },
                    { 19, "Florença", "A deslumbrante cidade italiana situada na região da Toscana, é um tesouro artístico e cultural que encanta visitantes há séculos. Lar de algumas das obras-primas mais icônicas da Renascença, como o David de Michelangelo e a cúpula da Catedral de Santa Maria del Fiore projetada por Brunelleschi, Florença é um museu a céu aberto. Suas ruas estreitas e pitorescas, pontes românticas sobre o rio Arno e praças charmosas, como a Piazza della Signoria, convidam os visitantes a explorar cada canto da cidade. Além de sua riqueza artística, Florença também é famosa por sua culinária deliciosa, destacando pratos como a pasta fresca, a carne de porco assada e o famoso gelato italiano.", "Toscana", "https://www.passagenspromo.com.br/blog/wp-content/uploads/2022/01/Florenca-Italia-740x415.jpg", "Itália" },
                    { 20, "Las Vegas", "Descubra a cidade mais famosa dos cassinos e entretenimento! Las Vegas oferece festas animadas, gastronomia de classe mundial, shows espetaculares e luxuosos resorts. Explore a cidade que nunca dorme!", "Nevada", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/34/2d/28/caption.jpg?w=700&h=-1&s=1&cx=662&cy=604&chk=v1_8984ddf3493edfb8c896", "Estados Unidos" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Destinos");
        }
    }
}
