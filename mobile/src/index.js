import React, {useState, useEffect} from 'react'

import { SafeAreaView,FlatList, Text, StyleSheet, StatusBar,TouchableOpacity } from 'react-native'
import api from './services/api'



export default function App(){

    const [projects, setProjects] = useState([])

    useEffect(()=>{
        api.get('projects').then(response => {
            console.log(response.data)
            setProjects(response.data)
        })
    },[])

    async function handleAddProject(){
        const response = await api.post(`projects`,{
            title: `Novo projeto ${Date.now()}`,
            owner: 'Mauro Braga'
        })

        const project = response.data

        setProjects([...projects, project])
    }

    return(
        <React.Fragment>
        <StatusBar barStyle="light-content" backgroundColor="#7159C1"/>
        <SafeAreaView  style={styles.container}>
            <FlatList data={projects} 
                keyExtractor={project => project.id}
                renderItem={({item: project})=>(
                    <Text style={styles.project} >{project.title}</Text>
                )}/>

        </SafeAreaView>
        <TouchableOpacity activeOpacity={0.9}
            style={styles.button}
            onPress={handleAddProject}>
            <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>

    {/*
        projects.map(project => (
            <Text style={styles.project} key={project.id}>{project.title}</Text>
        ))*/}

        </React.Fragment>
    ) 
    
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#7159c1',
        flex:1,
    },
    title: {
        color:'#FFF',
        fontSize: 32,
        fontWeight: 'bold'

    },
    project: {
        color:'#FFF',
        fontSize: 32,
        fontWeight: 'bold'

    }, button:{
        alignSelf:"stretch",
        backgroundColor:'#fff',
        margin: 20,
        height: 50,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'

    },buttonText:{
        fontWeight: 'bold',
        fontSize: 16,
        
    }
})