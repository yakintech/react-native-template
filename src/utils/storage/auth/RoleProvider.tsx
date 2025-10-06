import { useContext } from "react"
import { AuthContext, AuthContextData } from "../../../context/AuthContext"
import { Text } from "react-native-paper"


const RoleProvider = ({ children, roleName }: { children: React.ReactNode, roleName: string }) => {

    let { role } = useContext(AuthContext) as AuthContextData

    if (role !== roleName) {
        return <>
            {/* <Text>Yetkisiz Erişim</Text> */}
        </>
    }

    return <>{children}</>
}

export default RoleProvider