import { getDataISR } from "@/app/components/ui/Utlis";

interface User {
  id: string;
  name: string;
  avatar: string;
}

// Incremental Static Regeneration (ISR)
export default async function UsersPage() {

  const users: User[] = await getDataISR
  ("https://68ff5292e02b16d1753d6e56.mockapi.io/api/v1/users");

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
        Users
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-all"
          >
            {/* <Image
         src={user.avatar || "https://i.pravatar.cc/150"}
              alt={user.name}
              width={120}
              height={120}
              className="mx-auto rounded-full object-cover mb-4"
            /> */}
            
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
