import { useState, useEffect } from "react"
import AgentList from "./Components/AgentList"
import "./Style/App.css"
import AgentModal from "./Components/AgentModal"
import Hero from "./Components/Hero";
import { motion } from "framer-motion"

const App = () => {
  const [agents, setAgents] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedAgent, setSelectedAgent] = useState(null)
  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then(res => res.json())
      .then(result => {
        setAgents(result.data)
        setLoading(false)
      })
  }, [])
  
  if (loading) {
    return <h2>Loading...</h2>
  }

  const duelists = agents.filter(
  agent => agent.role && agent.role.displayName === "Duelist"
  )
  const initiators = agents.filter(
    agent => agent.role && agent.role.displayName === "Initiator"
  )
  const controller = agents.filter(
    agent => agent.role && agent.role.displayName === "Controller"
  )
  const sentinals = agents.filter(
    agent => agent.role && agent.role.displayName === "Sentinel"
  )
  return (
    
    <div className="container">
      <Hero />
      <motion.h2 initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>Duelists</motion.h2>
      <AgentList agents={duelists} onSelectAgent={setSelectedAgent} />
      <motion.h2 initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>Initiators</motion.h2>
      <AgentList agents={initiators} onSelectAgent={setSelectedAgent} />
      <motion.h2 initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>Controller</motion.h2>
      <AgentList agents={controller} onSelectAgent={setSelectedAgent} />
      <motion.h2 initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>Sentinals</motion.h2>
      <AgentList agents={sentinals} onSelectAgent={setSelectedAgent} />
      {selectedAgent && ( <AgentModal agent={selectedAgent} onClose={() => setSelectedAgent(null)}/>)}
      <p class="copy-right">© 2026 Lisa YOUS. Tous droits réservés.</p>
    </div>
  )
}

export default App
