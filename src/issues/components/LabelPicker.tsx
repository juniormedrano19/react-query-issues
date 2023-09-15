import { useQuery } from "@tanstack/react-query"
import { githubApi } from "../../api/githubApi";
import { Label } from "../interfaces/label";

export const LabelPicker = () => {

  const getLabels=async(): Promise<Label[]>=>{
    const {data}=await githubApi.get<Label[]>('/labels')
 /*    const res= await fetch('https://api.github.com/repos/facebook/react/labels'); */
 /*    const data= await res.json(); */
 /*    console.log(data); */
 return data;
  }

  //patrón adaptador con custom hooks
  const labelsQuery=useQuery(
    //espacio en caché que maneja 
    ['labels'],
    //function para traer esos labels
    getLabels,{
      refetchOnWindowFocus:false, 
    }
    //si quieres que refresque siempre tu data
  )

  return (
    <div>
        <span 
            className="badge rounded-pill m-1 label-picker"
            style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
        >
            Primary
        </span>
        
    </div>
  )
}
