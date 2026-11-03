import { useState } from "react";


interface StudenntGradeProps {
name: string;
  className: string;
  initialScore: number;
  status: string;
}

function StudentGrade({
  name,
  className,
  initialScore,
  status,
}: StudenntGradeProps) {
  const [score, setScore] = useState<number>(initialScore);

  const calculateFinalScore = (
    task: number,
    exam: number,
    attendance: number,
  ): number => {
    return task * 0.3 + exam * 0.5 + attendance * 0.2;
  };

  const updateScore = (currentScore: number, amount: number): number => {
    return currentScore + amount;
  };

  const getGrade = (score: number): string => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "E";
  };

  return (
    <div className="border rounded-lg p-6">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Kelas: {className}</p>
      <p>Status: {status}</p>

      <p>Nilai saat ini: {score}</p>

      <p>Nilai akhir: {calculateFinalScore(score, 85, 90).toFixed(1)}</p>

      <p>Predikat: {getGrade(score)}</p>

      <div className="flex gap-2 mt-4">
        <button onClick={() => setScore(updateScore(score, 5))}>
          Tambah 5
        </button>
      </div>
    </div>
  );
}

export default StudentGrade;
