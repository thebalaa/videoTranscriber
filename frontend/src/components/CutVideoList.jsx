import {useState,useEffect} from 'react'
import axiosInstance from '../axiosInstance'
import {useParams,Link} from 'react-router-dom'
export const CutVideoList=()=>{
     const {video_id}=useParams()
    console.log(video_id)
    const [cutVideoList,setCutVideoList]=useState([])
useEffect(()=>{

   async function getVideos(){
       try{
    const response=await axiosInstance.get(`getcutvideos/${video_id}/`)
    setCutVideoList(response.data.data)
       }catch(error){
           console.log(error)
    }
}
getVideos()
},[])

return(
  <>
  <h3>All Cut Videos</h3>
  {cutVideoList.length!=0 ? cutVideoList.map((video)=>{
      console.log(video)
      var video_name=video.cut_video_path.split('/')[2]
      return(
      <Link key={video.cut_video_id}
to={`http://meet.fractalnetworks.co:80/${video.cut_video_path}`}><div
style={{cursor:'pointer',color:'white',backgroundColor:'gray',marginTop:'1rem',
padding:'1rem'}} >
      {video_name}
      </div>
      </Link>
      )
}):"No Videos to Load"}
  </>
)
}