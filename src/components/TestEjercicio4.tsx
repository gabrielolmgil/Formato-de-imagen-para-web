import { useState } from "react";
const questions = [
    {
        question: "¿Qué API de JavaScript permite manipular imágenes en un canvas?",
        options: ["WebGL", "Canvas API", "Intersection Observer"],
        answer: "Canvas API",
    },
    {
        question: "¿Cuál de estos métodos obtiene los datos de píxeles de una imagen en Canvas?",
        options: ["getContext()", "getImageData()", "setTimeout()"],
        answer: "getImageData()",
    },
    {
        question: "¿Qué método se usa para dibujar una imagen en un canvas?",
        options: ["drawImage()", "fillRect()", "stroke()"],
        answer: "drawImage()",
    },
    {
        question: "¿Cuál es el contexto de renderizado 2D en un canvas?",
        options: ["2d", "webgl", "bitmaprenderer"],
        answer: "2d",
    },
    {
        question: "¿Qué método se usa para limpiar una parte del canvas?",
        options: ["clearRect()", "remove()", "delete()"],
        answer: "clearRect()",
    },
    {
        question: "¿Qué propiedad se usa para establecer el color de relleno en un canvas?",
        options: ["fillStyle", "strokeStyle", "color"],
        answer: "fillStyle",
    },
    {
        question: "¿Qué método se usa para crear un gradiente lineal en un canvas?",
        options: ["createLinearGradient()", "createRadialGradient()", "createPattern()"],
        answer: "createLinearGradient()",
    },
    {
        question: "¿Qué método se usa para transformar el contexto de un canvas?",
        options: ["transform()", "rotate()", "scale()"],
        answer: "transform()",
    },
    {
        question: "¿Qué método se usa para guardar el estado actual del contexto de un canvas?",
        options: ["save()", "store()", "backup()"],
        answer: "save()",
    },
];
const TestEjercicio4 = () => {
    const [selectedAnswers, setSelectedAnswers] =
        useState<string[]>(Array(questions.length).fill(""));
    const handleSelect = (index: number, option: string) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[index] = option;
        setSelectedAnswers(newAnswers);
    };
    const checkAnswers = () => {
        const correct = selectedAnswers.filter((ans, i) => ans ===
            questions[i].answer).length;
        alert(`Has respondido correctamente ${correct} de
    ${questions.length}`);
    };
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Test sobre Figma y
                React</h2>
            {questions.map((q, i) => (
                <div key={i} className="mb-4">
                    <p className="font-semibold">{q.question}</p>
                    {q.options.map((opt) => (
                        <button
                            key={opt}
                            className={`mr-2 px-4 py-2 mt-2 rounded ${selectedAnswers[i] === opt ? "bg-blue-500 text-white"
                                    : "bg-gray-300"
                                }`}
                            onClick={() => handleSelect(i, opt)}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            ))}
            <button onClick={checkAnswers} className="bg-green-500 textwhite px-6 py-2 mt-4 rounded">
                Verificar respuestas
            </button>
        </div>
    );
};
export default TestEjercicio4;