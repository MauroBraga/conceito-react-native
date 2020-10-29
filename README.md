# React Native

    -> Arquitetura React Native
        . Versão do React que serve para desenvolvimento mobile.
        . Multiplataforma
        . Podemos manipular cada plataforma de forma diferente.
        . Interface Nativa
        . Código não é transpilado; Nosso celular passa a entender javascript.
        . Outras plataformas migrando, Microsoft com windows

        JS  ----> Metro Bundler ----> Bundle ---> Bridge(Ponde)  --->Android
                                                                 ---> IOs

        - JS  
            . Nosso código javascript  com Js e Jsx                                                            
        
        - Metro Bundler     
            . Monitora todo código javascript e gera o nosso bundle.js. Seria o equivalente ao webpack

        - Bundle
            . Repassado para Bridge     

        - Bridge (Ponte)
            . Ponte de comunicação entre o javascript e o código nativo.
            . Transformar para Android e IOS.

        -   Sintaxe 
            . Declaração do componentes é igual a web
            . Não  usamos html e sim componentes próprios
            . Aplicamos estilos sem classes ou ID's, nenhum elemento tem estilização própria

        - Expo 
            . SDK com funcionalidades prontas prontas para usar (câmera, vídeo, integrações)
            . Não é necessário configurar emulador
            
            . Por que não utilizar ?
                * Limitação sobre o controle do código nativo
                * Várias bibliotecas não tem suporte para o Expo.
                * O expo liberou seus recursos sem utilizar ele.



