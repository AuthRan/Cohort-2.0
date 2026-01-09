import { RecoilRoot, useRecoilValue } from "recoil"
import { atom } from "recoil"

const networkAtom = atom({
    key: "networkAtom",
    default: 102
})

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  
  return (
    <div>
      <button>Home</button>
      <button>My network ({networkNotificationCount > 99 ? "99+" : networkNotificationCount})</button>
      <button>Jobs</button>
      <button>Messaging</button>
      <button>Notification</button>
      <button>Me</button>
    </div>
  )
}

export default App