package com.mycompany.banco.pesquisa.inovacao;
import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author miniguiti
 */
public class TesteClasse {
    public static void main(String[] args) {
     
        connection config = new connection();
        
        JdbcTemplate template = new JdbcTemplate(config.getDataSource());

        List<Empresa> listaEmpresa1 = template.query("select * from tb_empresa", new BeanPropertyRowMapper<>(Empresa.class));
       // System.out.println(listaEmpresa1);
    
        
        for (Empresa empresaDaVez : listaEmpresa1){
    System.out.println(empresaDaVez.toString());}
    }
        
        }
    
 
