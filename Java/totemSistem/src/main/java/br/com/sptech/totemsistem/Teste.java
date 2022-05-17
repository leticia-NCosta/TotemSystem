/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.sptech.totemsistem;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.SQLException;
import com.github.britooo.looca.api.core.Looca;


/**
 *
 * @author Vericoders
 */
public class Teste {
    

    public static void main(String[] args) throws SQLException{

        BancoDeDados banco = new BancoDeDados();
        SalvarDados salvar = new SalvarDados();
        Looca looca = new Looca();
        
        //System.out.println(banco.getFkEstacao());
        //salvar.salvarDadosVariaveis();
        System.out.println(looca.getGrupoDeDiscos().getTamanhoTotal());
        System.out.println(looca.getGrupoDeDiscos().getDiscos());
        
    }
}
