import { StyleSheet, Platform } from 'react-native';

const ACCENT = '#7c3aed';
const ACCENT2 = '#a855f7';
const BG = '#0f0f1a';
const CARD_BG = '#1a1a2e';
const BORDER = '#2a2a4a';
const TEXT = '#e2e8f0';
const MUTED = '#64748b';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
    paddingTop: Platform.OS === 'android' ? 40 : 60,
  },

  header: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  iconWrapper: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: '#1e1e3f',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: ACCENT,
    shadowColor: ACCENT,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  iconEmoji: {
    fontSize: 36,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: TEXT,
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  statusMsg: {
    fontSize: 13,
    color: MUTED,
    marginBottom: 16,
    letterSpacing: 0.3,
  },

  statsRow: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',      
    justifyContent: 'center', 
  },
  statBadge: {
  flex: 1,
  backgroundColor: CARD_BG,
  borderRadius: 12,
  paddingVertical: 10,
  paddingHorizontal: 8, 
  alignItems: 'center',
  borderWidth: 1,
  borderColor: BORDER,
  minWidth: 90, 
},

statLabel: {
  fontSize: 11,
  color: MUTED,
  marginTop: 2,
  letterSpacing: 0.5,
  textAlign: 'center',   // ← adicione
},
  statBadgePending: {
    borderColor: '#7c2d0066',
  },
  statBadgeDone: {
    borderColor: '#14532d66',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: '700',
    color: TEXT,
  },

  inputRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 10,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: CARD_BG,
    borderRadius: 14,
    paddingHorizontal: 16,
    color: TEXT,
    fontSize: 15,
    borderWidth: 1,
    borderColor: BORDER,
  },
  addBtn: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: ACCENT,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: ACCENT2,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 6,
  },
  addBtnDisabled: {
    backgroundColor: '#2a2a4a',
    shadowOpacity: 0,
    elevation: 0,
  },
  addBtnText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 32,
  },

  list: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    gap: 10,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CARD_BG,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: BORDER,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  checkBtn: {
    width: 26,
    height: 26,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: ACCENT,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  checkBtnDone: {
    backgroundColor: '#22c55e',
    borderColor: '#22c55e',
  },
  checkMark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  taskText: {
    flex: 1,
    fontSize: 15,
    color: TEXT,
    lineHeight: 21,
  },
  taskTextDone: {
    color: MUTED,
    textDecorationLine: 'line-through',
  },
  removeBtn: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#2a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  removeBtnText: {
    color: '#ef4444',
    fontSize: 13,
    fontWeight: '700',
  },

  emptyContainer: {
    alignItems: 'center',
    paddingTop: 60,
    gap: 8,
  },
  emptyText: {
    fontSize: 17,
    fontWeight: '600',
    color: MUTED,
  },
  emptySubText: {
    fontSize: 13,
    color: '#3a3a5a',
  },
});

export default styles;