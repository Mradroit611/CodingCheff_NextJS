import { UserProfile } from "@clerk/nextjs";
 
const UserProfilePage = () => (
  <div className="flex flex-row items-center justify-center h-full my-4"><UserProfile path="/user-profile" routing="path" /></div>
);
 
export default UserProfilePage;