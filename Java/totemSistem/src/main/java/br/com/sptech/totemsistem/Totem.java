package br.com.sptech.totemsistem;


import java.util.List;
import com.github.britooo.looca.api.core.Looca;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Totem {

    Looca looca = new Looca();
    Sistema sistema = new Sistema();

    // Dados Estáticos
    private Integer fkEstacao;
    private String hostname;
    private String dataAtual;
    private String sistemaOperacional;
    private String fabricanteSistema;
    private Integer arquitetura;
    private String inicializadoEm;
    private String permissoes;
    private String marca;
    private String fabricanteProcessador;
    private String microArquitetura;
    private Integer cpusFisicas;
    private Integer cpusLogicas;
    private Integer pacotesFisicos;
    private Long frequencia;
    // Dados Variaveis
    private Long memoriaEmUso;
    private Long memoriaDisponivel;
    private Integer totalProcessos;
    private Integer totalThreads;
    private Integer totalDeServicos;
    private Double temperatura;


    public Totem(){

        this.setHostname();
        this.setDataAtual();
        this.setSistemaOperacional();
        this.setFabricanteSistema();
        this.setArquitetura();
        this.setInicializadoEm();
        this.setPermissoes();
        this.setMarca();
        this.setFabricanteProcessador();
        this.setMicroArquitetura();
        this.setCpusFisicas();
        this.setCpusLogicas();
        this.setPacotesFisicos();
        this.setFrequencia();
        this.setMemoriaEmUso();
        this.setMemoriaDisponivel();
        this.setTotalProcessos();
        this.setTotalThreads();
        this.setTotalDeServicos();
        this.setTemperatura();

    }

    public void processos(){

        List listaProcessos = looca.getGrupoDeProcessos().getProcessos();

        for(int i = 0; i < listaProcessos.size(); i++){
            sistema.setLinhas("-", 30);
            System.out.println(listaProcessos.get(i));
        }

    }

    public void servicos(){

        List listaServicos = looca.getGrupoDeServicos().getServicos();

        for(int i = 0; i < listaServicos.size(); i++){
            sistema.setLinhas("-", 30);
            System.out.println(listaServicos.get(i));
        }

    }

    public Integer getFkEstacao(){
        return fkEstacao;
    }

    public String getHostname() {
        return hostname;
    }

    public void setHostname() {

        this.hostname = "";
        try {
            this.hostname = InetAddress.getLocalHost().getHostName();
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }

    }

    public String getDataAtual() {
        return dataAtual;
    }

    public void setDataAtual() {
        DateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("dd/MM/yy - HH:mm:ss");
        this.dataAtual = dtf2.format(LocalDateTime.now());
    }

    public String getSistemaOperacional() {
        return sistemaOperacional;
    }

    public void setSistemaOperacional() {
        this.sistemaOperacional = looca.getSistema().getSistemaOperacional();
    }

    public String getFabricanteSistema() {
        return fabricanteSistema;
    }

    public void setFabricanteSistema() {
        this.fabricanteSistema = looca.getSistema().getFabricante();
    }

    public Integer getArquitetura() {
        return arquitetura;
    }

    public void setArquitetura() {
        this.arquitetura = looca.getSistema().getArquitetura();
    }

    public String getInicializadoEm() {
        return inicializadoEm;
    }

    public void setInicializadoEm() {
        this.inicializadoEm = String.valueOf(looca.getSistema().getInicializado());
    }

    public String getPermissoes() {
        return permissoes;
    }

    public void setPermissoes() {
        this.permissoes = String.valueOf(looca.getSistema().getPermissao());
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca() {
        this.marca = looca.getProcessador().getNome();
    }

    public String getFabricanteProcessador() {
        return fabricanteProcessador;
    }

    public void setFabricanteProcessador() {
        this.fabricanteProcessador = looca.getProcessador().getFabricante();
    }

    public String getMicroArquitetura() {
        return microArquitetura;
    }

    public void setMicroArquitetura() {
        this.microArquitetura = looca.getProcessador().getMicroarquitetura();
    }

    public Integer getCpusFisicas() {
        return cpusFisicas;
    }

    public void setCpusFisicas() {
        this.cpusFisicas = looca.getProcessador().getNumeroCpusFisicas();
    }

    public Integer getCpusLogicas() {
        return cpusLogicas;
    }

    public void setCpusLogicas() {
        this.cpusLogicas = looca.getProcessador().getNumeroCpusLogicas();
    }

    public Integer getPacotesFisicos() {
        return pacotesFisicos;
    }

    public void setPacotesFisicos() {
        this.pacotesFisicos = looca.getProcessador().getNumeroPacotesFisicos();
    }

    public Long getFrequencia() {
        return frequencia;
    }

    public void setFrequencia() {
        this.frequencia = looca.getProcessador().getFrequencia();
    }

    public Long getMemoriaEmUso() {
        return memoriaEmUso;
    }

    public void setMemoriaEmUso() {
        this.memoriaEmUso = looca.getMemoria().getEmUso();
    }

    public Long getMemoriaDisponivel() {
        return memoriaDisponivel;
    }

    public void setMemoriaDisponivel() {
        this.memoriaDisponivel = looca.getMemoria().getDisponivel();
    }

    public Integer getTotalProcessos() {
        return totalProcessos;
    }

    public void setTotalProcessos() {
        this.totalProcessos = looca.getGrupoDeProcessos().getTotalProcessos();
    }

    public Integer getTotalThreads() {
        return totalThreads;
    }

    public void setTotalThreads() {
        this.totalThreads = looca.getGrupoDeProcessos().getTotalThreads();
    }

    public Integer getTotalDeServicos() {
        return totalDeServicos;
    }

    public void setTotalDeServicos() {
        this.totalDeServicos = looca.getGrupoDeServicos().getTotalDeServicos();
    }

    public Double getTemperatura() {
        return temperatura;
    }

    public void setTemperatura() {
        this.temperatura = looca.getTemperatura().getTemperatura();
    }

    @Override
    public String toString() {
        return "Totem{" + "fkEstacao=" + fkEstacao + ", hostname=" + hostname + ", dataAtual=" + dataAtual + ", sistemaOperacional=" + sistemaOperacional + ", fabricanteSistema=" + fabricanteSistema + ", arquitetura=" + arquitetura + ", inicializadoEm=" + inicializadoEm + ", permissoes=" + permissoes + ", marca=" + marca + ", fabricanteProcessador=" + fabricanteProcessador + ", microArquitetura=" + microArquitetura + ", cpusFisicas=" + cpusFisicas + ", cpusLogicas=" + cpusLogicas + ", pacotesFisicos=" + pacotesFisicos + ", frequencia=" + frequencia + ", memoriaEmUso=" + memoriaEmUso + ", memoriaDisponivel=" + memoriaDisponivel + ", totalProcessos=" + totalProcessos + ", totalThreads=" + totalThreads + ", totalDeServicos=" + totalDeServicos + ", temperatura=" + temperatura + '}';
    }


    
    
}
