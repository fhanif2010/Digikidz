import React from "react";
import Home from "../Page/Home/index";
import Loader from "../Page/Loader/index";
import Login from "../Page/Login/index";
import Profil from "../Page/Profil/index";

import Task from "../Page/Task/index";
import Task2 from "../Page/Task2/index";
import Task3 from "../Page/Task3/index";

import Trial from "../Page/Trial/index";
import Trial2 from "../Page/Trial/Trial2/index";
import Trial3 from "../Page/Trial/Trial3/index";

import Cuti from "../Page/Cuti/index";
import Cuti2 from "../Page/Cuti/Cuti2/index";
import Cuti3 from "../Page/Cuti/Cuti3/index";

import History from "../Page/History/index";
import HistoryName from "../Page/History/HistoryName/index";
import HistoryTask from "../Page/History/HistoryTask/index";
import HistoryTask2 from "../Page/History/HistoryTask2/index";

import HomeAdmin from "../Page/Admin/HomeAdmin/index";
import UserList from "../Page/Admin/User List/index";
import AdminProfil from "../Page/Admin/User List/AdminProfil/index";
import EditProfil from "../Page/Admin/User List/EditProfil/index";

import TaskAdmin from "../Page/Admin/TaskAdmin/index";
import TaskAdmin2 from "../Page/Admin/TaskAdmin/TaskAdmin2/index";
import TaskAdmin3 from "../Page/Admin/TaskAdmin/TaskAdmin3/index";

import TrialAdmin from "../Page/Admin/TrialAdmin/index";
import TrialProgres from "../Page/Admin/TrialAdmin/TrialProgresAdmin/index";
import TrialProgresTeacher from "../Page/Admin/TrialAdmin/TrialProgresAdmin/TrialProgresTeacher/index";
import TrialJoin from "../Page/Admin/TrialAdmin/TrialJoinAdmin/index";
import TrialCancel from "../Page/Admin/TrialAdmin/TrialCancelAdmin/index";

import CutiAdmin from "../Page/Admin/CutiAdmin/index";
import CutiProgres from "../Page/Admin/CutiAdmin/CutiProgres/index";
import CutiApprove from "../Page/Admin/CutiAdmin/CutiApprove/index";
import CutiRejected from "../Page/Admin/CutiAdmin/CutiRejected/index";
import CutiProses from "../Page/Admin/CutiAdmin/CutiProgres/CutiProses/index";
import CutiApproveList from "../Page/Admin/CutiAdmin/CutiApprove/CutiApproveList/index";
import CutiNameList from "../Page/Admin/CutiAdmin/CutiApprove/CutiNameList/index";
import CutiNameContent from "../Page/Admin/CutiAdmin/CutiApprove/CutiNameContent/index";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Loader">

        <Stack.Screen name="Loader" component={Loader}
          options={{ headerShown: false }} />

        <Stack.Screen name="Login" component={Login}
          options={{ headerShown: false }} />

        <Stack.Screen name="Home" component={Home}
          options={{ headerShown: false }} />

        <Stack.Screen name="Profil" component={Profil}
          options={{ headerShown: false }} />


        <Stack.Screen name="Task" component={Task}
          options={{ headerShown: false }} />

        <Stack.Screen name="Task2" component={Task2}
          options={{ headerShown: false }} />

        <Stack.Screen name="Task3" component={Task3}
          options={{ headerShown: false }} />


        <Stack.Screen name="Trial" component={Trial}
          options={{ headerShown: false }} />

        <Stack.Screen name="Trial2" component={Trial2}
          options={{ headerShown: false }} />

        <Stack.Screen name="Trial3" component={Trial3}
          options={{ headerShown: false }} />



        <Stack.Screen name="Cuti" component={Cuti}
          options={{ headerShown: false }} />

        <Stack.Screen name="Cuti2" component={Cuti2}
          options={{ headerShown: false }} />

        <Stack.Screen name="Cuti3" component={Cuti3}
          options={{ headerShown: false }} />



        <Stack.Screen name="History" component={History}
          options={{ headerShown: false }} />
        <Stack.Screen name="HistoryName" component={HistoryName}
          options={{ headerShown: false }} />
        <Stack.Screen name="HistoryTask" component={HistoryTask}
          options={{ headerShown: false }} />
        <Stack.Screen name="HistoryTask2" component={HistoryTask2}
          options={{ headerShown: false }} />


        {/* Admin */}
        <Stack.Screen name="HomeAdmin" component={HomeAdmin}
          options={{ headerShown: false }} />

        <Stack.Screen name="UserList" component={UserList}
          options={{ headerShown: false }} />
        <Stack.Screen name="AdminProfil" component={AdminProfil}
          options={{ headerShown: false }} />
        <Stack.Screen name="EditProfil" component={EditProfil}
          options={{ headerShown: false }} />

        <Stack.Screen name="TaskAdmin" component={TaskAdmin}
          options={{ headerShown: false }} />
        <Stack.Screen name="TaskAdmin2" component={TaskAdmin2}
          options={{ headerShown: false }} />
        <Stack.Screen name="TaskAdmin3" component={TaskAdmin3}
          options={{ headerShown: false }} />
      

        <Stack.Screen name="TrialAdmin" component={TrialAdmin}
          options={{ headerShown: false }} />
        <Stack.Screen name="TrialProgres" component={TrialProgres}
          options={{ headerShown: false }} />
          <Stack.Screen name="TrialJoin" component={TrialJoin}
          options={{ headerShown: false }} />
          <Stack.Screen name="TrialCancel" component={TrialCancel}
          options={{ headerShown: false }} />
          <Stack.Screen name="TrialProgresTeacher" component={TrialProgresTeacher}
          options={{ headerShown: false }} />

        <Stack.Screen name="CutiAdmin" component={CutiAdmin}
          options={{ headerShown: false }} />
        <Stack.Screen name="CutiProgres" component={CutiProgres}
          options={{ headerShown: false }} />
        <Stack.Screen name="CutiApprove" component={CutiApprove}
          options={{ headerShown: false }} />
        <Stack.Screen name="CutiRejected" component={CutiRejected}
          options={{ headerShown: false }} />
        <Stack.Screen name="CutiProses" component={CutiProses}
          options={{ headerShown: false }} />
        <Stack.Screen name="CutiApproveList" component={CutiApproveList}
          options={{ headerShown: false }} />
        <Stack.Screen name="CutiNameList" component={CutiNameList}
          options={{ headerShown: false }} />
        <Stack.Screen name="CutiNameContent" component={CutiNameContent}
          options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;