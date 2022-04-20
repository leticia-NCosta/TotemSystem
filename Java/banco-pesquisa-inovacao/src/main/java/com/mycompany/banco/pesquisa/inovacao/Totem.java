package com.mycompany.banco.pesquisa.inovacao;

import com.mycompany.banco.pesquisa.inovacao.Sistema;
import java.util.List;

import com.github.britooo.looca.api.core.Looca;

public class Totem {

    Looca looca = new Looca();
    Sistema sistema = new Sistema();

    private Integer id;
    private String localizacao;
    private String dataImplementacao;
    private String modelo;
    private String marca;
    private String dataFabricacao;
    private String sistemaOperacional;
    private String fabricanteSO;
    private String arquiteturaSO;
    private String inicializadoEmSO;
    private String permissoesSO;
    private String marcaProcessador;
    private String fabricanteProcessador;
    private String microArquitetura;
    private String cpusFisicas;
    private String cpusLogicas;
    private String pacotesFisicos;
    private String memoriaTotal;
    private String quantDiscos;
    private String quantVolumes;
    private String tamTotalDiscos;
    private String hostName;

    public Totem(){

    }

    public Totem(Integer id, String localizacao){

        this.setId(id);
        this.setLocalizacao(localizacao);

    }

    public Totem(Integer id, String localizacao, String dataImplementacao, String modelo, String marca, String dataFabricacao, String sistemaOperacional, String fabricanteSO, String arquiteturaSO, String inicializadoEmSO, String permissoesSO, String marcaProcessador, String fabricanteProcessador, String microArquitetura, String cpusFisicas, String cpusLogicas, String pacotesFisicos, String memoriaTotal, String quantDiscos, String quantVolumes, String tamTotalDiscos, String hostName) {
        this.id = id;
        this.localizacao = localizacao;
        this.dataImplementacao = dataImplementacao;
        this.modelo = modelo;
        this.marca = marca;
        this.dataFabricacao = dataFabricacao;
        this.sistemaOperacional = sistemaOperacional;
        this.fabricanteSO = fabricanteSO;
        this.arquiteturaSO = arquiteturaSO;
        this.inicializadoEmSO = inicializadoEmSO;
        this.permissoesSO = permissoesSO;
        this.marcaProcessador = marcaProcessador;
        this.fabricanteProcessador = fabricanteProcessador;
        this.microArquitetura = microArquitetura;
        this.cpusFisicas = cpusFisicas;
        this.cpusLogicas = cpusLogicas;
        this.pacotesFisicos = pacotesFisicos;
        this.memoriaTotal = memoriaTotal;
        this.quantDiscos = quantDiscos;
        this.quantVolumes = quantVolumes;
        this.tamTotalDiscos = tamTotalDiscos;
        this.hostName = hostName;
    }

    @Override
    public String toString() {
        return "Totem{" + "localizacao=" + localizacao + ", modelo=" + modelo + ", marca=" + marca + '}';
    }
    
    

    public void processos(){

        List listaProcessos = looca.getGrupoDeProcessos().getProcessos();

        for(int i = 0; i < listaProcessos.size(); i++){
            sistema.setLinhas("-", 30);
            System.out.println(listaProcessos.get(i));
        }

    }

    public Looca getLooca() {
        return looca;
    }

    public void setLooca(Looca looca) {
        this.looca = looca;
    }

    public Sistema getSistema() {
        return sistema;
    }

    public void setSistema(Sistema sistema) {
        this.sistema = sistema;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public String getDataImplementacao() {
        return dataImplementacao;
    }

    public void setDataImplementacao(String dataImplementacao) {
        this.dataImplementacao = dataImplementacao;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getDataFabricacao() {
        return dataFabricacao;
    }

    public void setDataFabricacao(String dataFabricacao) {
        this.dataFabricacao = dataFabricacao;
    }

    public String getSistemaOperacional() {
        return sistemaOperacional;
    }

    public void setSistemaOperacional(String sistemaOperacional) {
        this.sistemaOperacional = sistemaOperacional;
    }

    public String getFabricanteSO() {
        return fabricanteSO;
    }

    public void setFabricanteSO(String fabricanteSO) {
        this.fabricanteSO = fabricanteSO;
    }

    public String getArquiteturaSO() {
        return arquiteturaSO;
    }

    public void setArquiteturaSO(String arquiteturaSO) {
        this.arquiteturaSO = arquiteturaSO;
    }

    public String getInicializadoEmSO() {
        return inicializadoEmSO;
    }

    public void setInicializadoEmSO(String inicializadoEmSO) {
        this.inicializadoEmSO = inicializadoEmSO;
    }

    public String getPermissoesSO() {
        return permissoesSO;
    }

    public void setPermissoesSO(String permissoesSO) {
        this.permissoesSO = permissoesSO;
    }

    public String getMarcaProcessador() {
        return marcaProcessador;
    }

    public void setMarcaProcessador(String marcaProcessador) {
        this.marcaProcessador = marcaProcessador;
    }

    public String getFabricanteProcessador() {
        return fabricanteProcessador;
    }

    public void setFabricanteProcessador(String fabricanteProcessador) {
        this.fabricanteProcessador = fabricanteProcessador;
    }

    public String getMicroArquitetura() {
        return microArquitetura;
    }

    public void setMicroArquitetura(String microArquitetura) {
        this.microArquitetura = microArquitetura;
    }

    public String getCpusFisicas() {
        return cpusFisicas;
    }

    public void setCpusFisicas(String cpusFisicas) {
        this.cpusFisicas = cpusFisicas;
    }

    public String getCpusLogicas() {
        return cpusLogicas;
    }

    public void setCpusLogicas(String cpusLogicas) {
        this.cpusLogicas = cpusLogicas;
    }

    public String getPacotesFisicos() {
        return pacotesFisicos;
    }

    public void setPacotesFisicos(String pacotesFisicos) {
        this.pacotesFisicos = pacotesFisicos;
    }

    public String getMemoriaTotal() {
        return memoriaTotal;
    }

    public void setMemoriaTotal(String memoriaTotal) {
        this.memoriaTotal = memoriaTotal;
    }

    public String getQuantDiscos() {
        return quantDiscos;
    }

    public void setQuantDiscos(String quantDiscos) {
        this.quantDiscos = quantDiscos;
    }

    public String getQuantVolumes() {
        return quantVolumes;
    }

    public void setQuantVolumes(String quantVolumes) {
        this.quantVolumes = quantVolumes;
    }

    public String getTamTotalDiscos() {
        return tamTotalDiscos;
    }

    public void setTamTotalDiscos(String tamTotalDiscos) {
        this.tamTotalDiscos = tamTotalDiscos;
    }

    public String getHostName() {
        return hostName;
    }

    public void setHostName(String hostName) {
        this.hostName = hostName;
    }




}
