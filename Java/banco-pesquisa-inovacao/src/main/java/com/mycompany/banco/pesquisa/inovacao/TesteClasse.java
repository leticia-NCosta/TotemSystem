package com.mycompany.banco.pesquisa.inovacao;
import com.github.britooo.looca.api.core.Looca;
import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

public class TesteClasse {
    public static void main(String[] args) {
     
        connection config = new connection();
         
        Looca looca = new Looca();
        
        JdbcTemplate template = new JdbcTemplate(config.getDataSource());

        System.out.println(looca.getSistema().getInicializado());
        System.out.println(looca.getSistema().getFabricante());
        System.out.println(looca.getProcessador().getFabricante());

        String loocaDados = "INSERT INTO tb_totem (localizacao_totem, modelo, marca) VALUES (?,?,?);";

        template.update("INSERT INTO tb_totem (localizacao_totem, modelo, marca) VALUES (?,?,?);", 
                String.valueOf(looca.getSistema().getInicializado()),
                looca.getSistema().getFabricante(), 
                looca.getProcessador().getFabricante()
        );
        
//        List<Totem> listaTotem1 = template.query("select * from tb_totem",;
//                new BeanPropertyRowMapper<>(Totem.class));
       // System.out.println(listaEmpresa1);
    
        
//        for (Totem totemDaVez : listaTotem1){
//    System.out.println(totemDaVez.toString());}
//    }
//        
        }
}
 
