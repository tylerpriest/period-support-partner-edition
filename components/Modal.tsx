import React from 'react';
import {
  Modal as RNModal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../styles/tokens';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  maxHeight?: number;
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  title,
  children,
  showCloseButton = true,
  maxHeight = SCREEN_HEIGHT * 0.8,
}) => {
  return (
    <RNModal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
      accessible={true}
      accessibilityViewIsModal={true}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
          accessible={true}
          accessibilityLabel="Close modal"
          accessibilityRole="button"
        />

        <View style={[styles.modalContainer, { maxHeight }]}>
          {/* Header */}
          {(title || showCloseButton) && (
            <View style={styles.header}>
              {title && <Text style={styles.title}>{title}</Text>}
              {showCloseButton && (
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={onClose}
                  accessible={true}
                  accessibilityLabel="Close"
                  accessibilityRole="button"
                >
                  <Text style={styles.closeIcon}>✕</Text>
                </TouchableOpacity>
              )}
            </View>
          )}

          {/* Content */}
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={true}
          >
            {children}
          </ScrollView>
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContainer: {
    width: '90%',
    backgroundColor: colors.neutral[50],
    borderRadius: borderRadius.xl,
    ...shadows.xl,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
  },
  title: {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.heading.h2.fontSize,
    lineHeight: typography.heading.h2.lineHeight,
    fontWeight: '600' as any,
    color: colors.neutral[900],
    flex: 1,
  },
  closeButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: colors.neutral[100],
  },
  closeIcon: {
    fontSize: 20,
    color: colors.neutral[700],
  },
  scrollView: {
    maxHeight: '100%',
  },
  scrollContent: {
    padding: spacing.lg,
  },
});
