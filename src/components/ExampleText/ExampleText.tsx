import { AiOutlineMail } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { IoCodeSlashSharp } from 'react-icons/io5';
import { TbMessageCircle } from 'react-icons/tb';

export default function ExampleText() {
  return (
    <div className="flex gap-3 ">
      {boxInfo.map((item) => (
        <div
          key={item.id}
          className="bg-gray-200 h-30 p-3 flex flex-col justify-between rounded-md"
        >
          <p className="text-sm">{item.text}</p>
          <span>{item.logo}</span>
        </div>
      ))}
    </div>
  );
}

const boxInfo = [
  {
    id: 1,
    logo: <FiUser />,
    text: 'Write a to-do list for a personal project',
  },
  {
    id: 2,
    logo: <AiOutlineMail />,
    text: 'Generate an email to reply to a job offer',
  },
  {
    id: 3,
    logo: <TbMessageCircle />,
    text: 'Summarize this article in one paragraph',
  },
  {
    id: 4,
    logo: <IoCodeSlashSharp />,
    text: 'How does AI work in a techninal capacity',
  },
];
