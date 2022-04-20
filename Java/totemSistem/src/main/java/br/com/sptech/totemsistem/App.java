package br.com.sptech.totemsistem;

import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

public class App {
    
    String username = "a";
    public static void main(String[] args) {
        
        Usuario usuario = new Usuario();
        Connection config = new Connection();
        
        JdbcTemplate template = new JdbcTemplate(config.getDataSource());
        
        //Apagando a tabela caso ela exista 
        
        template.execute("DROP TABLE IF EXISTS Usuario");
        
        String criacaoTabelaUsuario = "CREATE TABLE IF NOT EXISTS Usuario("
                                      + "id INT PRIMARY KEY AUTO_INCREMENT,"
                                      + "nome VARCHAR(255),"
                                      + "email VARCHAR(255),"
                                      + "senha VARCHAR(15),"
                                      + ");"; 
        
          template.execute(criacaoTabelaUsuario);
          
          // Inserindo registros na tabela pokemon
          String inserirUsuario = "INSERT INTO Usuario VALUES (null,?,?,?)";
          
          template.update(inserirUsuario, "Usuario1", "email@email.com", "123456789");
          template.update(inserirUsuario, "Usuário2", "email2@gmail.com", "123456789");
          
        List<Usuario> listarUsuario1= template.query("select * from Usuario where email = 'email@email.com'",
                new BeanPropertyRowMapper<>(Usuario.class));
                
        for (Usuario usuario1 : listarUsuario1) {
            System.out.println(usuario1.toString());
            App teste = new App();
            teste.setUsername(usuario1.getEmail());
            System.out.println(usuario1.getEmail());
//            email = usuario1.getEmail();
//            senha = usuario1.getSenha();
        }
        
        
//        List user = template.query("select email from Usuario where email = "+usuario.getEmail(),
//                new BeanPropertyRowMapper<>(Usuario.class));
//        System.out.println(listarUsuario1);
   }
    public void setUsername(String name){
        this.username = name;
    }
    
    public String getUsername(){
        return this.username;
    }
}
