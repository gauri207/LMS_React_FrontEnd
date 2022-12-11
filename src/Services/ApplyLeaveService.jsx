import axios from "axios";
const APPLY_LEAVE_API_BASE_URL="http://localhost:2983/api/LeaveDetails";

class ApplyLeaveService
{
    getLeaves()
    {
        console.log('Axios called')
        return axios.get(APPLY_LEAVE_API_BASE_URL);
    }

    getLeavesById(leaveId)
    {
        return axios.get(APPLY_LEAVE_API_BASE_URL+'/'+leaveId);
    }
    createLeave(applyLeave)
    {
        return axios.post(APPLY_LEAVE_API_BASE_URL,applyLeave);
    }
    updateLeave(applyLeave,leaveId)
    {
        return axios.put(APPLY_LEAVE_API_BASE_URL+"/"+leaveId,applyLeave);
    }
    deleteLeave(leaveId)
    {
        return axios.delete(APPLY_LEAVE_API_BASE_URL+"/"+leaveId);
    }

}
export default new ApplyLeaveService();