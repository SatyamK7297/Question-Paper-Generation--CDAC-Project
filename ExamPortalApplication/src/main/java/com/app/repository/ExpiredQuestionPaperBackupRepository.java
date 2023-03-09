package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ExpiredQuestionPaperBackup;

public interface ExpiredQuestionPaperBackupRepository extends JpaRepository<ExpiredQuestionPaperBackup, Long>{

}
