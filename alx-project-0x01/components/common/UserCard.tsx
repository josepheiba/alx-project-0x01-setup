import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ 
  id, 
  name, 
  username, 
  email, 
  address, 
  phone, 
  website, 
  company 
}) => {
  return (
    <div className="max-w-lg mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-lg text-gray-600">@{username}</p>
      </div>
      
      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-gray-700">Email:</p>
          <p className="text-gray-600">{email}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-700">Phone:</p>
          <p className="text-gray-600">{phone}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-700">Website:</p>
          <p className="text-blue-600 hover:underline cursor-pointer">{website}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-700">Address:</p>
          <p className="text-gray-600">
            {address.street}, {address.suite}
          </p>
          <p className="text-gray-600">
            {address.city}, {address.zipcode}
          </p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-700">Company:</p>
          <p className="text-gray-800 font-medium">{company.name}</p>
          <p className="text-gray-600 italic text-sm">{company.catchPhrase}</p>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;