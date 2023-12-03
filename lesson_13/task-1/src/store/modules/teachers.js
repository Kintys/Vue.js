import { teacherList } from '@/data/2_dataList'
import { getModuleTemplate } from '../helpers'
let module = getModuleTemplate('Teachers', teacherList)
module.getters.getTeacherBySubjectId = (state) => {
    return (subjectId) => {
        return state.Teachers.filter((teacher) => teacher.subjectId.includes(subjectId))
    }
}
export default module
