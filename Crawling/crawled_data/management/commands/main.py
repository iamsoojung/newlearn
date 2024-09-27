import shutil
from datetime import datetime
import os
import logging
from django.core.management import call_command
from django.core.management.base import BaseCommand

# 로깅 설정
logger = logging.getLogger(__name__)

class Command(BaseCommand):
    help = "카테고리 별로 뉴스 크롤링 후 번역 및 mongodb 저장을 처리하는 과정"

    def handle(self, *args, **kwargs):
        current_date = datetime.now().strftime("%y%m%d")
        base_folder = os.path.join("crawl_data", current_date)

        if not os.path.exists(base_folder):
            os.makedirs(base_folder)

        sids = [100, 101, 102, 103, 104, 105]
        for sid in sids:
            try:
                logger.info(f'크롤링 작업 시작 for SID: {sid}...')

                crawl_filename = f"{current_date}_sid_{sid}.csv"
                crawl_file_path = os.path.join(base_folder, crawl_filename)

                # 크롤링 작업 실행
                call_command('crawl_news', str(sid), '--output', crawl_file_path)
                logger.info(f'크롤링 완료 SID: {sid}, saved to {crawl_file_path}')

                # 번역 작업 후 저장할 파일명
                translated_filename = f"translated_{current_date}_sid_{sid}.csv"
                translated_file_path = os.path.join(base_folder, translated_filename)

                logger.info(f'번역 작업 시작 SID: {sid}...')
                call_command('translate_news', '--filename', crawl_file_path, '--output', translated_file_path)
                logger.info(f'번역 완료 SID: {sid}, translated file: {translated_file_path}')

                # 중복 검사 후 최종 저장할 파일명
                final_filename = f"final_translated_{current_date}_sid_{sid}.csv"
                final_file_path = os.path.join(base_folder, final_filename)

                logger.info(f'중복 검사 및 MongoDB 저장 시작 SID: {sid}...')
                call_command('check_translated_news', '--filename', translated_file_path, '--output', final_file_path)
                logger.info(f'MongoDB 저장 완료 SID: {sid}, final file: {final_file_path}')

            except Exception as e:
                logger.error(f'작업 중 오류 발생 SID: {sid}: {e}')

        shutil.rmtree(base_folder, ignore_errors=True)

        #이제 나온 몽고디비 데이터를 mysql로 마이그레이션
        call_command('migration_to_csv')
        logger.info('몽고DB 데이터를 MySQL로 마이그레이션 완료')
