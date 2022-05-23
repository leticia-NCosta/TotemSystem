
package br.com.sptech.totemsistem;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.SQLException;
import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.discos.Volume;
import java.net.Inet4Address;
import java.net.NetworkInterface;
import java.util.List;
import java.net.UnknownHostException;
import java.net.InetAddress;
import java.net.SocketException;


/**
 *
 * @author Vericoders
 */
public class Teste {
    

    public static void main(String[] args) throws SQLException,SocketException{
        
        String hostname = "";
            try {
                hostname = InetAddress.getLocalHost().getHostName();
            } catch (UnknownHostException e) {
                e.printStackTrace();
            }

        BancoDeDados banco = new BancoDeDados();
        SalvarDados salvar = new SalvarDados();
        Looca looca = new Looca();
        
        //System.out.println(banco.getFkEstacao());
        //salvar.salvarDadosVariaveis();
        
        
        System.out.println(banco.existeEstacao("Liberdade", "mysql"));
        System.out.println(banco.getIdEstacao("Consolação", "mysql"));
  
        
    }
}
