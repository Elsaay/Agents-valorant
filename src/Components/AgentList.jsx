import AgentCard from "./AgentCard";
import "../Style/AgentList.css"
const AgentList = ({agents , onSelectAgent}) => {
  return (
    <div className="agent-list ">
      {agents.map((agent, index) =>
        (
        <AgentCard key={agent.uuid} delay={index * 0.05} name={agent.displayName} description={agent.description} role={agent.role.displayName} image={agent.fullPortrait}  onClick={() => onSelectAgent(agent)} />
        ))
      }
    </div>
  )
}

export default AgentList
