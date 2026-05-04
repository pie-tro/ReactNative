import React, { useReducer, useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Animated,
  Keyboard,
} from 'react-native';
import styles from './ToDoStyles';

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

type Action =
  | { type: 'ADD_TASK'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: string }
  | { type: 'REMOVE_TASK'; payload: string };

function taskReducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        { id: Date.now().toString(), text: action.payload.trim(), completed: false },
        ...state,
      ];
    case 'TOGGLE_TASK':
      return state.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
    case 'REMOVE_TASK':
      return state.filter((t) => t.id !== action.payload);
    default:
      return state;
  }
}

function TaskCard({
  task,
  onToggle,
  onRemove,
}: {
  task: Task;
  onToggle: () => void;
  onRemove: () => void;
}) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnim = React.useRef(new Animated.Value(24)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
      Animated.spring(slideAnim, { toValue: 0, tension: 80, friction: 10, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[styles.card, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}
    >
      <TouchableOpacity
        style={[styles.checkBtn, task.completed && styles.checkBtnDone]}
        onPress={onToggle}
        activeOpacity={0.8}
      >
        {task.completed && <Text style={styles.checkMark}>✓</Text>}
      </TouchableOpacity>

      <Text style={[styles.taskText, task.completed && styles.taskTextDone]} numberOfLines={3}>
        {task.text}
      </Text>

      <TouchableOpacity style={styles.removeBtn} onPress={onRemove} activeOpacity={0.7}>
        <Text style={styles.removeBtnText}>✕</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function ToDo() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [input, setInput] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  useEffect(() => {
    if (totalTasks === 0) {
      setStatusMsg('Nenhuma tarefa ainda. Adicione uma!');
    } else if (pendingTasks === 0) {
      setStatusMsg('Todas as tarefas concluídas!');
    } else {
      setStatusMsg(`${pendingTasks} pendente${pendingTasks !== 1 ? 's' : ''} · ${completedTasks} concluída${completedTasks !== 1 ? 's' : ''}`);
    }
  }, [tasks]);

  function handleAdd() {
    if (!input.trim()) return;
    dispatch({ type: 'ADD_TASK', payload: input });
    setInput('');
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Text style={styles.iconEmoji}>📋</Text>
        </View>
        <Text style={styles.title}>Minhas Tarefas</Text>
        <Text style={styles.statusMsg}>{statusMsg}</Text>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statBadge}>
            <Text style={styles.statNumber}>{totalTasks}</Text>
            <Text style={styles.statLabel}>Total</Text>
          </View>
          <View style={[styles.statBadge, styles.statBadgePending]}>
            <Text style={[styles.statNumber, { color: '#f97316' }]}>{pendingTasks}</Text>
            <Text style={styles.statLabel}>Pendentes</Text>
          </View>
          <View style={[styles.statBadge, styles.statBadgeDone]}>
            <Text style={[styles.statNumber, { color: '#22c55e' }]}>{completedTasks}</Text>
            <Text style={styles.statLabel}>Concluídas</Text>
          </View>
        </View>
      </View>

      {/* Input */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa..."
          placeholderTextColor="#555"
          value={input}
          onChangeText={setInput}
          onSubmitEditing={handleAdd}
          returnKeyType="done"
          maxLength={120}
        />
        <TouchableOpacity
          style={[styles.addBtn, !input.trim() && styles.addBtnDisabled]}
          onPress={handleAdd}
          activeOpacity={0.85}
          disabled={!input.trim()}
        >
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onToggle={() => dispatch({ type: 'TOGGLE_TASK', payload: item.id })}
            onRemove={() => dispatch({ type: 'REMOVE_TASK', payload: item.id })}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Sua lista está vazia.</Text>
            <Text style={styles.emptySubText}>Adicione sua primeira tarefa acima!</Text>
          </View>
        }
      />
    </View>
  );
}