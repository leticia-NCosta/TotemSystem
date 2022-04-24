package br.com.sptech.totemsistem;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.util.Conversor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Teste {

    public static void main(String[] args) {

        Looca looca = new Looca();
        Info info = new Info();
        Totem totem = new Totem();
        Conversor conversor = new Conversor();

        //Salvar esses
        //System.out.println(looca.getMemoria().getEmUso());
        //System.out.println(looca.getMemoria().getDisponivel());
        // System.out.println(looca.getTemperatura().getTemperatura());
        // System.out.println(looca.getGrupoDeProcessos().getTotalProcessos());
        //System.out.println(looca.getGrupoDeProcessos().getTotalThreads());
        //System.out.println(looca.getGrupoDeServicos().getTotalDeServicos());

        DateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("yy/MM/dd HH:mm:ss");
        System.out.println(dtf2.format(LocalDateTime.now()));


    }

    

    
}
